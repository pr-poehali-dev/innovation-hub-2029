import { JuniorNavbar } from "@/components/junior/JuniorNavbar"
import { JuniorHero } from "@/components/junior/JuniorHero"
import { JuniorAbout } from "@/components/junior/JuniorAbout"
import { JuniorCourses } from "@/components/junior/JuniorCourses"
import { JuniorPrices } from "@/components/junior/JuniorPrices"
import { JuniorAchievements } from "@/components/junior/JuniorAchievements"
import { JuniorContacts } from "@/components/junior/JuniorContacts"
import { JuniorFooter } from "@/components/junior/JuniorFooter"

export default function Index() {
  return (
    <div className="font-nunito">
      <JuniorNavbar />
      <main>
        <JuniorHero />
        <JuniorAbout />
        <JuniorCourses />
        <JuniorPrices />
        <JuniorAchievements />
        <JuniorContacts />
      </main>
      <JuniorFooter />
    </div>
  )
}
