<script lang="ts">
	import { FloatingLabelInput, Helper, Button, Heading, Spinner } from 'flowbite-svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import iconGoogle from '$lib/assets/images/icon_google.svg';
	import iconGithub from '$lib/assets/images/icon_github.svg';
	import { mutation } from 'svelte-apollo';
	import { CreateUser, type CreateUserInput, type Input } from '$lib/graphql/mutations';

  const createUser = mutation<boolean, Input<CreateUserInput>>(CreateUser);
	const { form, errors, isSubmitting, handleChange, handleSubmit } = createForm({
		initialValues: {
			username: 'revil',
			password: '1234',
			confirmPassword: '1234',
			nickname: 'test',
      imageUrl: '',
			email: 'revil.com@gmail.com'
		},
		validationSchema: yup.object().shape({
			username: yup.string().required('아이디는 필수야'),
			password: yup.string().required('비밀번호도 필수고'),
			confirmPassword: yup
				.string()
				.required('비밀번호 함 더 써봐')
				.oneOf([yup.ref('password'), ''], '비밀번호 다르다..'),
			nickname: yup.string().required('닉네임은 찰진걸로'),
			email: yup.string().email('이메일 제대로 쓰자')
		}),
		onSubmit: async (values) => {
      const res = await createUser({
        variables: {
          input: {
            username: values.username,
            password: values.password,
            nickname: values.nickname,
            imageUrl: values.imageUrl,
            email: values.email,
          }
        }
      });
		}
	});
</script>

<div class="flex h-full justify-center items-center">
	<div class="w-72 max-w-50">
		<Heading tag="h4">계정을<br />만들어보자</Heading>

		<form class="mt-10" on:submit|preventDefault={handleSubmit}>
			<div>
				<FloatingLabelInput
					type="text"
					style="outlined"
					label="아이디*"
          name="username"
          color="{$errors.username ? 'red' : 'base'}"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.username}
				/>
				{#if $errors.username}
					<Helper class="mt-2" color="red">{$errors.username}</Helper>
				{/if}
			</div>

			<div>
				<FloatingLabelInput
					type="password"
					style="outlined"
					label="비밀번호*"
          name="password"
          color="{$errors.password ? 'red' : 'base'}"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.password}
				/>
				{#if $errors.password}
					<Helper class="mt-2" color="red">{$errors.password}</Helper>
				{/if}
			</div>

			<div>
				<FloatingLabelInput
					type="password"
					style="outlined"
					label="비밀번호 확인*"
          name="confirmPassword"
          color="{$errors.confirmPassword ? 'red' : 'base'}"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.confirmPassword}
				/>
				{#if $errors.confirmPassword}
					<Helper class="mt-2" color="red">{$errors.confirmPassword}</Helper>
				{/if}
			</div>

			<div>
				<FloatingLabelInput
					type="text"
					style="outlined"
					label="닉네임*"
          name="nickname"
          color="{$errors.nickname ? 'red' : 'base'}"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.nickname}
				/>
				{#if $errors.nickname}
					<Helper class="mt-2" color="red">{$errors.nickname}</Helper>
				{/if}
			</div>

			<div>
				<FloatingLabelInput
					type="text"
					style="outlined"
					label="이메일"
          name="email"
          color="{$errors.email ? 'red' : 'base'}"
					on:change={handleChange}
					on:blur={handleChange}
					bind:value={$form.email}
				/>
				{#if $errors.email}
					<Helper class="mt-2" color="red">{$errors.email}</Helper>
				{/if}
			</div>

			<div class="text-center space-y-1">
				<span class="text-sm mb-3 font-semibold">연결하면 추가기능이..!</span>
				<Button type="button" color="light" class="w-full">
					<img src={iconGoogle} alt="Google 계정 연결하기" width="20px" height="20px" class="mr-2" />
					Google 계정 연결하기
				</Button>
				<Button type="button" color="light" class="w-full">
					<img src={iconGithub} alt="Github 계정 연결하기" width="20px" height="20px" class="mr-2" />
					Github 계정 연결하기
				</Button>
			</div>

			<div class="space-y-1">
				<Button type="submit" color="primary" class="w-full" disabled={$isSubmitting}>
          {#if $isSubmitting}
            <Spinner class="mr-3" size="4" color="white" />열심히 만들고 있다
          {:else}
            계정 만들기
          {/if}
        </Button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	form {
		div {
			&:not(:first-child) {
				@apply mt-4;
			}
		}
	}
</style>
