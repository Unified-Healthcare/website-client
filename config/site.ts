export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Unified Healthcare",
	description: "Unified Healthcare is a platform that allows you to manage your hospital's departments and patients.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Department Update",
      href: "/department-update",
    },
    {
      label: "Patient Creation",
      href: "/patient-create",
    },

	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Department Update",
      href: "/department-update",
    },
    {
      label: "Patient Creation",
      href: "/patient-create",
    },
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
