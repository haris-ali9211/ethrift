const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const stripe = require('stripe')(KEY);
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51K78BdIplhdHVFKyVvhHVEPemUbcmhN0L8YnOiG6QT3bPKhqLb1ihK8HrX5PuLbBV1BqEnHQaZDNRgfod0P37CZA0070brzppe');

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;