<script lang="ts">
	import { FloatingLabelInput, Helper, Button, A, Heading } from 'flowbite-svelte';
  import iconGoogle from '$lib/assets/images/icon_google.svg';
  import iconGithub from '$lib/assets/images/icon_github.svg';
</script>

<div class="flex h-full justify-center items-center">
	<div class="w-72 max-w-50">
		<Heading tag="h4">자 맹글어보자</Heading>

		<form class="mt-10">
			<div>
				<FloatingLabelInput
					type="text"
					style="outlined"
					name="username"
					label="이메일"
				/>
			</div>

			<div>
				<FloatingLabelInput
					type="password"
					style="outlined"
					name="password"
					label="비밀번호"
				/>
			</div>

			<div>
				<FloatingLabelInput
					type="text"
					style="outlined"
					name="nickname"
					label="닉네임"
				/>
			</div>

			<div class="text-center space-y-1">
        <span class="text-sm mb-3">계정 연결하면 추가기능이..!</span>
				<Button type="button" color="light" class="w-full">
          <img src={iconGoogle} alt="" width="24px" height="24px" class="mr-2">
          Google 계정 연결하기
        </Button>
				<Button type="button" color="light" class="w-full">
          <img src={iconGithub} alt="" width="24px" height="24px" class="mr-2">
          Github 계정 연결하기
        </Button>
      </div>

			<div class="space-y-1">
				<Button type="submit" color="primary" class="w-full">
          계정 만들기
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
