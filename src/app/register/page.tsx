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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

import { kecamatan } from '@/const/kecamatan'

export default function Register() {
	return (
		<div className="flex flex-row min-h-screen justify-center items-center">
			<Card className="w-xl">
				<CardHeader className="text-center">
					<CardTitle>Selamat datang</CardTitle>
					<CardDescription>
						Daftar gratis untuk menyampaikan dan memantau pengaduan.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Nama lengkap</FieldLabel>
								<Input id="email" required />
							</Field>
							<div className="flex justify-between gap-3">
								<Field>
									<FieldLabel htmlFor="nik">NIK</FieldLabel>
									<Input id="nik" required />
								</Field>
								<Field>
									<FieldLabel htmlFor="ponsel">Nomor ponsel</FieldLabel>
									<Input id="ponsel" required />
								</Field>
							</div>
							<div className="flex justify-between gap-3">
								<Field>
									<FieldLabel htmlFor="password">Sandi</FieldLabel>
									<Input id="password" type="password" required />
								</Field>
								<Field>
									<FieldLabel htmlFor="password">Ulangi kata sandi</FieldLabel>
									<Input id="password" type="password" required />
								</Field>
							</div>
							<div className="flex justify-between gap-3">
								<Field>
									<FieldLabel htmlFor="email">Email</FieldLabel>
									<Input id="email" type="email" required />
								</Field>
								<Field>
									<FieldLabel htmlFor="kecamatan">Kecamatan</FieldLabel>
									<Select items={kecamatan}>
										<SelectTrigger>
											<SelectValue />
										</SelectTrigger>
										<SelectContent className="absolute">
											<SelectGroup>
												{kecamatan.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
								</Field>
							</div>
							<Field>
								<Button type="submit">Buat akun</Button>
								<FieldDescription className="text-center">
									Sudah punya akun? <Link href="/login">Masuk sekarang</Link>
								</FieldDescription>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
