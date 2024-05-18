import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {

    const [buttonText, setButtonText] = useState("Show")


    // const buttonClickHandler = () => {
    //     setIsVisible(!isVisible)

    //     if (!isVisible) {
    //         setButtonText("Hide")
    //         return
    //     } else {
    //         setButtonText("Show")
    //     }

    // }

    return (
        <div className="border border-black p-2 m-2">

            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible
                    ? <button className="border border-l-amber-400 cursor-pointer" onClick={() => { setIsVisible(!isVisible) }}>Hide</button>
                    : <button className="border border-l-amber-400 cursor-pointer" onClick={() => setIsVisible(true)}>Show</button>
            }

            {isVisible && <p>{description}</p>}

        </div>
    )
}

const InstaMart = () => {
    // const [sectionConfig, setSectionConfig] = useState({
    //     showAbout: true,
    //     showTeam: false,
    //     showCareer: false,
    //     showProduct: false,
    //     showDetails: false

    // })

    const [visibleSection, setVisibleSection] = useState("team")

    return (
        <>
            {/* <AboutInstamart/>
        <DetailsOfInstamart/>
        <TeamOfInstamart/>
        <ProductsOFInstamart/>
        <CareersOfInstamart/> */}

            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"} description={`Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front`
            }
                isVisible={visibleSection === "about"}
                setIsVisible={() => setVisibleSection("about")}
            />
            <Section title={"Team Instamart"} description={`Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front`}
                isVisible={visibleSection === "team"}
                setIsVisible={() => setVisibleSection("team")}
            />

            <Section title={"Careers"} description={`Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front`}
                isVisible={visibleSection === "careers"}
                setIsVisible={() => setVisibleSection("careers")}
            />

            <Section title={"Product"} description={`Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front`}
                isVisible={visibleSection === "product"}
                setIsVisible={() => setVisibleSection("product")}
            />

            <Section title={"Details"} description={`Now is the winter of our discontent
Made glorious summer by this sun of York;
And all the clouds that lour'd upon our house
In the deep bosom of the ocean buried.
Now are our brows bound with victorious wreaths;
Our bruised arms hung up for monuments;
Our stern alarums changed to merry meetings,
Our dreadful marches to delightful measures.
Grim-visaged war hath smooth'd his wrinkled front`}
                isVisible={visibleSection === "details"}
                setIsVisible={() => setVisibleSection("details")}
            />

        </>
    )
}

export default InstaMart