import { z } from "zod";

const phoneNumberValidationFn = (val) => {
    // 1. Clean the input: Remove spaces, brackets, and hyphens.
    const cleanedVal = val.replace(/[\s()\-]/g, '');

    // 2. Define regex patterns for different scenarios
    //    a) Indian number (cleaned): 10 digits, starts with 6-9
    const isIndianCleaned = /^[6-9]\d{9}$/.test(cleanedVal);

    //    b) International number (cleaned): optional '+', then 8 to 15 digits
    //       (adjust length range as per your international requirements)
    const isInternationalCleaned = /^\+?[1-9]\d{7,14}$/.test(cleanedVal); // Assuming 8 to 15 total digits

    // 3. Return true if it matches either pattern after cleaning
    return isIndianCleaned || isInternationalCleaned;
  }

const validationSchema = {
    contactPage: z.object({
        name: z.string().nonempty({ message: "Required" }),
        email: z.string().email(),
        phone: z.string().nonempty({ message: "Required" }).refine(phoneNumberValidationFn, { message: "Invalid phone number" }),
        extra: z.string(),
        course: z.string(),
        timestamp: z.any().nullable(),
    })
}

export default validationSchema