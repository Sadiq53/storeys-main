import PointSection from "../../../shared/PointSection/PointSection"

const data = [
  {
    header: "Trust & Transparency",
    description: "Building long-term relationships through honest advice and clear communication"
  },
  {
    header: "Excellence",
    description: "Setting new industry standards with innovative solutions and high-quality service"
  },
  {
    header: "Customer-Centric Approach ",
    description: "Understanding your needs and delivering results that exceed expectations."
  },
]

const VisionComp = () => {
  return (
    <> 
        <div className="content gap-30">
            <h4 className="font-lg text-left">Our Vision & Values</h4>

            <p className="font-sm medium fs-22 text-left">Our vision is to elevate real estate experiences by combining market expertise with a personalized approach. We believe in</p>

            <PointSection data={data} />
        </div>
    </>
  )
}

export default VisionComp