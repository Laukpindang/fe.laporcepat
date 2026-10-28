'use client'

import Link from 'next/link'
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

export default function Login() {
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
					<form>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Email atau NIK</FieldLabel>
								<Input id="email" required />
							</Field>
							<Field>
								<div className="flex items-center">
									<FieldLabel htmlFor="password">Sandi</FieldLabel>
									<Link
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										Lupa sandi?
									</Link>
								</div>
								<Input id="password" type="password" required />
							</Field>
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
