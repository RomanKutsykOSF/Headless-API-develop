export default {
    type: "object",
    properties: {
        COOKIES_SIGNATURE_KEY: { type: "string" },
        COMMERCE_API_URL: { type: "string" },
        COMMERCE_API_ORGANIZATION_ID: { type: "string" },
        COMMERCE_API_CLIENT_ID: { type: "string" },
        COMMERCE_API_CLIENT_SECRET: { type: "string" },
        OCAPI_CLIENT_ID: { type: "string" },
        OCAPI_CLIENT_SECRET: { type: "string" },
        OCAPI_URL: { type: "string" },
        ACCESS_CONTROL_ALLOW_ORIGIN: { type: "string" },
        OSF_REFAPP_SITE_PREFERENCE_INSTANCE_TYPE: { type: "string" },
        OSF_REFAPP_PREFERENCE_GROUP_ID: { type: "string" },
        OCAPI_BM_USER: { type: "string" },
        OCAPI_BM_PASSWORD: { type: "string" },
        STRIPE_SECRET: { type: "string" },
        STRIPE_WEBHOOK_SECRET: { type: "string" },
        STRIPE_PAYMENT_INSTRUMENT_ID: { type: "string" },
    },
    required: [
        "COOKIES_SIGNATURE_KEY",
        "COMMERCE_API_URL",
        "COMMERCE_API_ORGANIZATION_ID",
        "COMMERCE_API_CLIENT_ID",
        "COMMERCE_API_CLIENT_SECRET",
        "OCAPI_CLIENT_ID",
        "OCAPI_CLIENT_SECRET",
        "OCAPI_URL",
        "OSF_REFAPP_SITE_PREFERENCE_INSTANCE_TYPE",
        "OSF_REFAPP_PREFERENCE_GROUP_ID",
        "OCAPI_BM_USER",
        "OCAPI_BM_PASSWORD",
        "STRIPE_SECRET",
        "STRIPE_WEBHOOK_SECRET",
        "STRIPE_PAYMENT_INSTRUMENT_ID",
    ],
};
