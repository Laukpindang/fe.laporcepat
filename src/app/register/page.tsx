'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export default function Register() {
	return (
		<div className="flex flex-row min-h-screen justify-center items-center">
			<Card className="w-3xl">
				<CardHeader>
					<CardTitle className="text-center">Selamat datang</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Email atau NIK</FieldLabel>
								<Input id="email" required />
							</Field>
							<Field>
								<FieldLabel htmlFor="password">Sandi</FieldLabel>
								<Input id="password" type="password" required />
							</Field>
							<Field>
								<Button type="submit">Buat akun</Button>
								<FieldDescription className="text-center">
									Sudah punya akun? <Link href="/register">Masuk sekarang</Link>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
