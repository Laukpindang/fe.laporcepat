'use client'

import Link from 'next/link'
import { type HTMLInputTypeAttribute, useState } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { type Account, dummyAccounts } from '@/const/accounts'
import { kecamatan } from '@/const/kecamatan'

const accountAtt = ['Nama Lengkap', 'NIK', 'Email', 'Nomor Ponsel', 'Kecamatan']

export default function ProfilePage() {
	// TODO: hapus underscore (_) jika sudah terhubung ke backend
	const [accountDetail, _setAccountDetail] = useState<Account>(dummyAccounts[0])
	const [isPassShowed, setIsPassShowed] = useState(false)

	const [isEditing, setIsEditing] = useState(false)

	const passwordVisibility: HTMLInputTypeAttribute = isPassShowed
		? 'text'
		: 'password'

	const changeVisibility = (isChecked: boolean) => {
		setIsPassShowed(isChecked)
	}

	return (
		<div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] px-6 pb-24 pt-28 text-zinc-100 antialiased">
			<div className="flex justify-center items-start">
				<Card className="w-240 h-full gap-5 px-2">
					<CardHeader className="flex flex-col pt-4">
						<p className="font-bold text-2xl">Tatang Sutarman</p>
						<p className="text-lg">tsut@gmail.com</p>
					</CardHeader>
					{!isEditing && (
						<CardContent>
							<Card className="p-5">
								<p className="text-lg font-semibold">Detail Akun</p>
								<div>
									{Object.values(accountDetail).map((att, index) => (
										<div key={att} className="grid grid-cols-[200px_1fr]">
											<p>{accountAtt[index]}</p>
											<p>
												<span>: </span>
												{att}
											</p>
										</div>
									))}
								</div>
							</Card>
							<div className="flex justify-end mt-10 gap-4">
								<Link
									href="/login"
									className={`${buttonVariants({ variant: 'destructive', size: 'lg' })} w-20 h-12`}
								>
									Keluar
								</Link>
								<Button
									onClick={() => setIsEditing(true)}
									className="w-24 h-12"
								>
									Ubah Data
								</Button>
							</div>
						</CardContent>
					)}
					{isEditing && (
						<CardContent className="flex flex-col gap-4">
							<Card className="p-5">
								<p className="text-lg ">Ubah Data Diri</p>
								<CardDescription>
									Perbarui informasi kontak Anda. NIK dan email tidak dapat
									diubah.
								</CardDescription>
								<form>
									<FieldGroup>
										<Field>
											<FieldLabel htmlFor="nama">Nama lengkap</FieldLabel>
											<Input
												id="nama"
												placeholder="Ubah nama"
												defaultValue={accountDetail.namaLengkap}
												required
											/>
										</Field>
										<div className="flex justify-between gap-3">
											<Field>
												<FieldLabel htmlFor="nik">NIK</FieldLabel>
												<Input
													id="nik"
													placeholder={accountDetail.nik}
													disabled
												/>
											</Field>
											<Field>
												<FieldLabel htmlFor="ponsel">Nomor ponsel</FieldLabel>
												<Input
													id="ponsel"
													defaultValue={accountDetail.nomorPonsel}
												/>
											</Field>
										</div>
										<div className="flex justify-between gap-3">
											<Field>
												<FieldLabel htmlFor="email">Email</FieldLabel>
												<Input
													id="email"
													type="email"
													placeholder={accountDetail.email}
													disabled
												/>
											</Field>
											<Field>
												<FieldLabel htmlFor="kecamatan">Kecamatan</FieldLabel>
												<Select items={kecamatan}>
													<SelectTrigger>
														<SelectValue>{accountDetail.kecamatan}</SelectValue>
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
										<div className="flex justify-end gap-4">
											<Button
												variant={`destructive`}
												type="reset"
												className="w-24 h-10"
											>
												Reset
											</Button>

											<Button type="submit" className="w-24 h-10">
												Ubah Data
											</Button>
										</div>
									</FieldGroup>
								</form>
							</Card>
							<Card className="p-5">
								<p className="text-lg ">Ubah Kata Sandi</p>
								<CardDescription>
									Gunakan kata sandi yang kuat dan tidak dipakai di layanan
									lain.
								</CardDescription>
								<CardContent className="flex flex-col gap-4">
									<form action="">
										<FieldGroup>
											<Field>
												<FieldLabel htmlFor="password">Sandi Baru</FieldLabel>
												<Input
													id="password"
													type={passwordVisibility}
													required
												/>
											</Field>
											<div className="flex justify-between gap-3">
												<Field>
													<FieldLabel htmlFor="password">Sandi Baru</FieldLabel>
													<Input
														id="password"
														type={passwordVisibility}
														required
													/>
												</Field>
												<Field>
													<FieldLabel htmlFor="password">
														Ulangi kata sandi
													</FieldLabel>
													<Input
														id="password"
														type={passwordVisibility}
														required
													/>
												</Field>
											</div>
										</FieldGroup>
										<div className="flex justify-between items-center my-5">
											<span className="flex gap-2">
												<Checkbox
													className="size-5"
													onCheckedChange={(e) => changeVisibility(e)}
												/>
												<p>Tamplikan Sandi</p>
											</span>
											<div className="flex gap-2">
												<Button
													variant={`destructive`}
													type="reset"
													className="w-24 h-10"
												>
													Reset
												</Button>

												<Button type="submit" className="w-24 h-10">
													Ubah Data
												</Button>
											</div>
										</div>
									</form>
								</CardContent>
							</Card>
							<Button
								onClick={() => setIsEditing(false)}
								variant={`destructive`}
							>
								Kembali
							</Button>
						</CardContent>
					)}
				</Card>
			</div>
		</div>
	)
}
