import logo from '../../public/assets/images/logo.svg'
import './landingPageStyle.css'


function firstSection() {

    return (
        <section id='firstSection'>
            <div id='firstSection-1'>
                <img src={logo} alt="logo" />
                <div id="firstSection-1-1">
                    <h1>AI Powered Insulin Ratio Suggestions</h1>
                    <p>
                        Better understand your weight in relation to your height using
                        our body mass index (BM) calculator. While BMI is not the
                        sole determinant of a healthy weight, it offers a valuable
                        starting point to evaluate your overall health and well-being.
                    </p>
                </div>
            </div>
            <div id="firstSection-2">
            </div>
        </section>
    )
}

export const FirstSection = firstSection


function secondSection() {
    return (
        <section id='secondSection'>
            <img src="/assets/images/image-man-eating.webp" alt="manEating" />
            <div id='secondSection-1'>
                <h2>What your BMI result means</h2>
                <p>
                    A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
                    Maintaining a healthy weight may lower your chances of
                    experiencing health issues later on, such as obesity and type
                    2 diabetes. Aim for a nutritious diet with reduced fat and
                    sugar content, incorporating ample fruits and vegetables.
                    Additionally, strive for regular physical activity, ideally about
                    30 minutes daily for five days a week.
                </p>
            </div>
        </section>
    )
}

export const SecondSection = secondSection


function thirdSection() {
    return (
        <section id='thirdSection'>
            <div id='thirdSection-1'>
                <div className="thirdSectionItem">
                    <img src="/assets/images/icon-eating.svg" alt="iconEating" />
                    <div>
                        <h4>Healthy eating</h4>
                        <p>
                            Healthy eating promotes weight control,
                            disease prevention, better digestion, immunity,
                            mental clarity, and mood.
                        </p>
                    </div>
                </div>
                <div className="thirdSectionItem">
                    <img src="/assets/images/icon-exercise.svg" alt="iconExercice" />
                    <div>
                        <h4>Regular exercise</h4>
                        <p>
                            Exercise improves fitness, aids weight control,
                            elevates mood, and reduces disease risk,
                            fostering wellness and longevity.
                        </p>
                    </div>
                </div>
                <div className="thirdSectionItem">
                    <img src="/assets/images/icon-sleep.svg" alt="iconeSleep" />
                    <div>
                        <h4>Adequate sleep</h4>
                        <p>
                            Sleep enhances mental clarity, emotional
                            stability, and physical wellness, promoting
                            overall restoration and rejuvenation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const ThirdSection = thirdSection


function fourthSection() {
    return (
        <div>
            <section id='fourthSection'>
                <div id="fourthSection-1">
                    <h1>Limitations of BMI</h1>
                    <p>
                        Although BMI is often a practical indicator of healthy weight, it is not
                        suited for every person. Specific groups should carefully consider their
                        BMI outcomes, and in certain cases, the measurement may not be
                        beneficial to use.
                    </p>
                </div>
                <div id="fourthSection-2" style={{ marginLeft: "200px" }}>
                    <div id="gender" className="fourthSection-2-Item">
                        <div className="fourthSection-2-Item-Content">
                            <div className="fourthSection-2-Item-Content-Title">
                                <img src="/assets/images/icon-gender.svg" alt="gender" />
                                <h5>Gender</h5>
                            </div>
                            <p>
                                The development and body fat composition of girls and boys vary with age. Consequently,
                                a child's age and gender are considered when evaluating their BMI.
                            </p>
                        </div>
                    </div>

                    <div className="fourthSection-2-Item">
                        <div className="fourthSection-2-Item-Content">
                            <div className="fourthSection-2-Item-Content-Title">
                                <img src="/assets/images/icon-age.svg" alt="age" />
                                <h5>Age</h5>
                            </div>
                            <p>
                                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
                                body fat content.
                            </p>
                        </div>
                    </div>

                    <div className="fourthSection-2-Item">
                        <div className="fourthSection-2-Item-Content">
                            <div className="fourthSection-2-Item-Content-Title">
                                <img src="/assets/images/icon-muscle.svg" alt="muscle" />
                                <h5>Muscle</h5>
                            </div>
                            <p>
                                BMI may misclassify muscular
                                individuals as overweight or obese, as
                                it doesn't differentiate muscle from fat.
                            </p>
                        </div>
                    </div>

                    <div className="fourthSection-2-Item">
                        <div className="fourthSection-2-Item-Content">
                            <div className="fourthSection-2-Item-Content-Title">
                                <img src="/assets/images/icon-pregnancy.svg" alt="pregnancy" />
                                <h5>Pregnancy</h5>
                            </div>
                            <p>
                                Expectant mothers experience weight
                                gain due to their growing baby.
                                Maintaining a healthy pre-pregnancy
                                BMI is advisable to minimise health
                                risks for both mother and child.
                            </p>
                        </div>
                    </div>

                    <div className="fourthSection-2-Item">
                        <div className="fourthSection-2-Item-Content">
                            <div className="fourthSection-2-Item-Content-Title">
                                <img src="/assets/images/icon-race.svg" alt="race" />
                                <h5>Race</h5>
                            </div>
                            <p>
                                Certain health concerns may affect
                                individuals of some Black and Asian
                                origins at lower BMIs than others. To
                                learn more, it is advised to discuss this
                                with your GP or practice nurse.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const FourthSection = fourthSection

