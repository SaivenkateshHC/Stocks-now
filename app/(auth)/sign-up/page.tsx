'use client'
import { CountrySelectField } from "@/components/forms/CountrySelectField"
import FooterLink from "@/components/forms/FooterLink"
import InputField from "@/components/forms/InputField"
import SelectField from "@/components/forms/SelectField"
import { Button } from "@/components/ui/button"
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constant"
import { Loader2 } from "lucide-react"
import { useForm, SubmitHandler } from "react-hook-form"

const SignUp = () => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'IN',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology'
        },
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<SignUpFormData> = (data) => console.log(data)
    return (
        <div>
            <h1 className='form-title'>Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="Enter your full name"
                    register={register}
                    error={errors.fullName}
                    validation={{ required: 'Full name is required', pattern: { value: /^[a-zA-Z ]+$/, message: 'Full name should not contain numbers or special characters' } }}
                />
                <InputField
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email address' } }}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: 'Password must be at least 8 characters long and contain at least one letter and one number' } }}
                />
                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required />
                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goals"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required />
                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk tolerance"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required />
                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your preferred industry"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? <> <span>Creating Account</span><Loader2 className="mr-2 h-4 w-4 animate-spin" /> </> : 'Start your Investing Journey'}
                </Button>

                <FooterLink text="Already have an account?" linkText="Login" href="/login" />
            </form>
        </div>
    )
}

export default SignUp   