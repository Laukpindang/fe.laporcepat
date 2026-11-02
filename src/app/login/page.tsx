'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const loginSchema = z.object({
	email: z.email('Email tidak valid'),
	password: z.string().min(6, 'Sandi harus memiliki minimal 6 karakter')
})
type TLoginSchema = z.infer<typeof loginSchema>

export default function Login() {
	const router = useRouter()
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit = (data: TLoginSchema) => {
		if (data.email === 'admin@laporcepat.com' && data.password === 'admin123') {
			router.replace('/admin')
		} else if (
			data.email === 'petugas@laporcepat.com' &&
			data.password === 'petugas123'
		) {
			router.replace('/petugas')
		} else {
			router.replace('/profil')
		}
		localStorage.setItem('laporcepat-logged', 'logged')
	}

	return (
		<div className="flex flex-row min-h-screen justify-center items-center">
			<Card className="w-xl">
				<CardHeader className="text-center">
					<CardTitle>Selamat datang kembali</CardTitle>
					<CardDescription>
						Masuk untuk membuat dan memantau pengaduan Anda.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FieldGroup>
							<Controller
								control={control}
								name="email"
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="email">Email atau NIK</FieldLabel>
										<Input {...field} id="email" required />
									</Field>
								)}
							/>
							<Controller
								control={control}
								name="password"
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<div className="flex items-center">
											<FieldLabel htmlFor="password">Sandi</FieldLabel>
											<Link
												href="#"
												className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
											>
												Lupa sandi?
											</Link>
										</div>
										<Input {...field} id="password" type="password" required />
									</Field>
								)}
							/>
							<Field>
								<Button type="submit">Masuk</Button>
								<FieldDescription className="text-center">
									Belum punya akun? <Link href="/register">Buat sekarang</Link>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
