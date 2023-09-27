import logo from "@assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	mobile: string;
	password: string;
	confirmPassword: string;
};

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	console.log(errors);
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
								<input type="submit" className="btn btn-lg btn-primary bg-blue-600" value="وارد شوید" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
