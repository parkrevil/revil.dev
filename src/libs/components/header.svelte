<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
    A,
	} from 'flowbite-svelte';
</script>

<Navbar let:toggle fluid={true}>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>revil.dev</span
		>
	</NavBrand>

	<div class="flex items-center order-2">
    <A href="/sign-in" class="text-sm">로그인</A>
		<Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
		<NavHamburger on:click={toggle} class1="w-full" />
	</div>

	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm"> Bonnie Green </span>
			<span class="block truncate text-sm font-medium"> name@flowbite.com </span>
		</DropdownHeader>
		<DropdownItem>Dashboard</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Sign out</DropdownItem>
	</Dropdown>

	<NavUl>
		<NavLi href="/" active={true}>대시보드</NavLi>
		<NavLi href="/profile">프로필</NavLi>
		<NavLi href="/projects">프로젝트</NavLi>
		<NavLi href="/ggabongs">까만 봉다리</NavLi>
	</NavUl>
</Navbar>
