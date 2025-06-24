import "@/lib/typedef"
import { stagger } from "motion"


const animFns = {
    /**
     * 
     * @param {SectionAnimFuncPropType} param0 
     */
    async homeMainSection({ scope, animate }) {
      await animate(".cards>*", { opacity: 0, y: 5 }, { duration: 0 })
      await animate("h1>span, p, button, img", { opacity: 0, y: 5, filter: "blur(2px)" }, { duration: 0 })
      await animate("img", { opacity: 1, y: 0, filter: "blur(0px)" }, { duration: 0.05, filter: { duration: 0.08, delay: 0.1 } })
      await animate("h1>span:first-of-type", { opacity: 1, y: 0, filter: "blur(0px)" }, { duration: 0.05, filter: { duration: 0.08, delay: 0.1 }})      
      await animate("h1>span:last-of-type", { opacity: 1, y: 0, filter: "blur(0px)" }, { duration: 0.05, filter: { duration: 0.08 }})      
      await animate("p", { opacity: 1, y: 0, filter: "blur(0px)" }, { duration: 0.05, filter: { duration: 0.05 }})
      await animate(".cards>*", { opacity: 1, y: 0 }, { delay: stagger(0.05) })
    }
}

export default animFns