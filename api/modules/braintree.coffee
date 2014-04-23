braintree = require 'braintree'
Config = require 'config'

merchantId = Config.payment.id

gateway = braintree.connect
  environment: braintree.Environment[Config.payment.env]
  merchantId: merchantId
  publicKey: Config.payment.key
  privateKey: Config.payment.secret

exports.createTransaction = (user, order, form, cb) ->

  useSavedCard = not form['card.number'] and user.get('payment.token')
  params =
    amount: order.get('amount').toFixed(2)
    serviceFeeAmount: order.get('serviceFeeAmount').toFixed(2)
    #orderId: order._id
    merchantAccountId: order.merchantId
    options:
      submitForSettlement: true
      holdInEscrow: true

  if useSavedCard
    params.paymentMethodToken = user.get('payment.token')
  else
    params.creditCard =
      number: form['card.number']
      expirationDate: form['card.exiresAt'].replace(/\s/, '')
      cvv: form['card.cvv']
      cardholderName: form['card.cardholderName']
    params.customer =
      firstName: user.get('firstName')
      lastName: user.get('lastName')
      email: user.email
    params.options.storeInVaultOnSuccess = true

  console.log params

  gateway.transaction.sale params, (err, result) ->
    console.log err, result
    if err or not result?.success
      order.set 'status', 'failed'
      order.set 'transaction.error', err or result?.message
      order.save()
      return cb(err)

    # Update User - the user doesnt need to know this so we can return before a success
    if result?.transaction?.creditCard?.token
      user.set 'payment.token', result.transaction.creditCard.token
      user.set 'payment.last4', result.transaction.creditCard.last4
      user.set 'payment.cardType', result.transaction.creditCard.cardType
      user.set 'payment.expiration', result.transaction.creditCard.expirationDate
      user.save()

    order.set 'status', 'purchased'
    order.set 'transaction.id', result?.transaction?.id
    order.save()

    cb(null, result)

exports.createMerchant = (data, client, cb) ->
  params =
    applicantDetails:
      companyName: client.get('name')
      firstName: data.firstName
      lastName: data.lastName
      dateOfBirth: data.dateOfBirth
      email: client.get('email')
      phone: client.get('phone')
      address:
        streetAddress: data.address.streetAddress
        postalCode: data.address.postalCode
        locality: data.address.locality
        region: data.address.region
      routingNumber: data.routingNumber # "1234567890"
      accountNumber: data.accountNumber # "43759348798"
    tosAccepted: true
    masterMerchantAccountId: Config.payment.merchantAccountId
    #id: client.get('payment.braintree.id') if client.get('payment.braintree.id')

  gateway.merchantAccount.create params, (err, result) ->
    console.log err, result
    return cb(err) if err
    return cb(result.message) unless result.success
    client.set 'payment.braintree.id', result.merchantAccount.id
    client.set 'payment.braintree.status', result.merchantAccount.status
    client.save (err) ->
      cb(err, client)

###
{ transaction:
   { id: '4rxtf6',
     status: 'submitted_for_settlement',
     type: 'sale',
     currencyIsoCode: 'USD',
     amount: '5.00',
     merchantAccountId: 'jon_instant',
     orderId: null,
     createdAt: '2013-09-29T06:03:01Z',
     updatedAt: '2013-09-29T06:03:01Z',
     customer:
      { id: '6152017',
        firstName: 'Drew',
        lastName: 'Smith',
        company: null,
        email: 'drew@example.com',
        website: null,
        phone: '312-555-1234',
        fax: null },
     billing:
      { id: null,
        firstName: null,
        lastName: null,
        company: null,
        streetAddress: null,
        extendedAddress: null,
        locality: null,
        region: null,
        postalCode: null,
        countryName: null,
        countryCodeAlpha2: null,
        countryCodeAlpha3: null,
        countryCodeNumeric: null },
     refundId: null,
     refundIds: [],
     refundedTransactionId: null,
     settlementBatchId: null,
     shipping:
      { id: null,
        firstName: null,
        lastName: null,
        company: null,
        streetAddress: null,
        extendedAddress: null,
        locality: null,
        region: null,
        postalCode: null,
        countryName: null,
        countryCodeAlpha2: null,
        countryCodeAlpha3: null,
        countryCodeNumeric: null },
     customFields: '',
     avsErrorResponseCode: null,
     avsPostalCodeResponseCode: 'I',
     avsStreetAddressResponseCode: 'I',
     cvvResponseCode: 'M',
     gatewayRejectionReason: null,
     processorAuthorizationCode: 'B21TCJ',
     processorResponseCode: '1000',
     processorResponseText: 'Approved',
     purchaseOrderNumber: null,
     taxAmount: null,
     taxExempt: false,
     creditCard:
      { token: 'gmt4tb',
        bin: '411111',
        last4: '1111',
        cardType: 'Visa',
        expirationMonth: '10',
        expirationYear: '2014',
        customerLocation: 'US',
        cardholderName: 'Jon Nutter',
        imageUrl: 'https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox&merchant_id=hzkp332cx85phdnw',
        prepaid: 'Unknown',
        healthcare: 'Unknown',
        debit: 'Unknown',
        durbinRegulated: 'Unknown',
        commercial: 'Unknown',
        payroll: 'Unknown',
        issuingBank: 'Unknown',
        countryOfIssuance: 'Unknown',
        venmoSdk: false,
        maskedNumber: '411111******1111',
        expirationDate: '10/2014' },
     statusHistory: [ [Object], [Object] ],
     planId: null,
     subscriptionId: null,
     subscription: { billingPeriodEndDate: null, billingPeriodStartDate: null },
     addOns: [],
     discounts: [],
     descriptor: { name: null, phone: null },
     recurring: false,
     channel: null,
     serviceFeeAmount: '1.00',
     escrowStatus: 'hold_pending',
     disbursementDetails:
      { disbursementDate: null,
        settlementAmount: null,
        settlementCurrencyIsoCode: null,
        settlementCurrencyExchangeRate: null,
        fundsHeld: null } },
  success: true }
###

