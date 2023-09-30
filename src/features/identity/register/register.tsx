import logo from "@assets/images/logo.svg";
import { useEffect } from "react";
import { Link, useActionData, useNavigate, useNavigation, useRouteError, useSubmit } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { httpServis } from "@core/httpService";
import { useTranslation } from "react-i18next";

type Inputs = {
	mobile: string;
	password: string;
	confirmPassword: string;
};

const Register = () => {
	const submitForm = useSubmit();
	const formStatus = useNavigation();
	const isSubmitSuccessfull = useActionData();
	const navigate = useNavigate();
	const routErrors: any = useRouteError();
	const { t } = useTranslation();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		const { confirmPassword, ...formDa } = data;
		submitForm(formDa, { method: "POST" });
	};
	console.log(errors);

	useEffect(() => {
		if (!!isSubmitSuccessfull) {
			setTimeout(() => navigate("/login"), 2000);
		}
	}, [isSubmitSuccessfull]);
	return (
		<>
			<div className="text-center mt-4 flex flex-col justify-center items-center content-center">
				<img src={logo} style={{ height: "100px" }} />
				<h1 className="h2">پلتفرم آموزش آنلاین</h1>
				<p className="lead">جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید</p>
				<p className="lead">
					قبلا ثبت نام کرده اید؟
					<Link to="/login" className="me-2">
						وارد شوید
					</Link>
				</p>
			</div>

			<div className="card">
				<div className="card-body">
					<div className="m-sm-4">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mb-3">
								<label className="form-label">موبایل</label>
								<input
									className={`form-control form-control-lg ${errors.mobile && `is-invalid`}`}
									type="number"
									{...register("mobile", { required: "شماره موبایل الزامی است", maxLength: 11, minLength: 11 })}
								/>
								<span className="error text-red-400 text-xs">{errors.mobile?.message}</span>
								<span className="error text-red-400 text-xs">
									{(errors.mobile?.type === "minLength" || errors.mobile?.type === "maxLength") && "عدد وارد شده باید 11 رقمی باشد"}
								</span>
							</div>
							<div className="mb-3">
								<label className="form-label">رمز عبور</label>
								<input
									className={`form-control form-control-lg ${errors.mobile && `is-invalid`}`}
									type="password"
									{...register("password", { required: "رمز عبور الزامی است" })}
								/>
								<span className="error text-red-400 text-xs">{errors.password?.message}</span>
							</div>
							<div className="mb-3">
								<label className="form-label">تکرار رمز عبور</label>
								<input
									className={`form-control form-control-lg ${errors.mobile && `is-invalid`}`}
									type="password"
									{...register("confirmPassword", {
										required: "تکرار رمز عبور الزامی است",
										validate: (item) => {
											if (watch("password") !== item) {
												return "رمز عبور و تکرار آن مطابقت ندارند";
											}
										},
									})}
								/>
								<span className="error text-red-400 text-xs">{errors.confirmPassword?.message}</span>
							</div>
							<div className="text-center mt-3">
								<input
									type="submit"
									className={`btn btn-lg text-white  ${formStatus.state === "submitting" ? "bg-blue-300" : "bg-blue-600"} `}
									value={formStatus.state === "submitting" ? "در حال ثبت نام" : t("register.register")}
								/>
							</div>
						</form>
						{!!routErrors && (
							<div className="bg-red-300 text-center py-2 px-2 mt-2 text-gray-600 rounded-sm">
								{routErrors.response?.data.map((error: any) => error.description)}
							</div>
						)}
						{!!isSubmitSuccessfull && formStatus.state !== "submitting" && (
							<div className="bg-green-600 mt-3 p-2 text-xs text-white text-center">
								ثبت نام شما با موفقیت انجام شد. به صفحه ورود منتقل می‌شوید
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;

export async function ActionRegister({ request }: any) {
	console.log(request);
	const formDat = await request.formData();
	const data = Object.fromEntries(formDat);
	const response = await httpServis.post("/Users", data);
	return response?.status === 200;
}
