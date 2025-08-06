import BMRCalculator from "./components/BMRCalculator";

export default function Home() {
  return (
    <>
    <nav className="w-full bg-gray-100 border-b text-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Calculator.net</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#" className="hover:underline">Financial</a></li>
          <li><a href="#" className="hover:underline">Fitness & Health</a></li>
          <li><a href="#" className="hover:underline">Math</a></li>
          <li><a href="#" className="hover:underline">Others</a></li>
        </ul>
      </nav>
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">
               BMR Calculator
        </h1>

        <p className="mb-4 text-gray-700">
          The <strong>Basal Metabolic Rate (BMR) Calculator</strong> estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).
        </p>
       
        <BMRCalculator />
        <section className="mt-10 text-gray-800">
          <h2 className="text-2xl font-semibold mb-2">Result</h2>
          <p className="mb-4">BMR = <strong>1,717</strong> Calories/day (example)</p>
          <h3 className="text-xl font-semibold mb-2">Daily calorie needs based on activity level</h3>
          <table className="mb-4 w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Activity Level</th>
                <th className="border px-2 py-1">Calorie</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Sedentary: little or no exercise</td><td className="border px-2 py-1">2,060</td></tr>
              <tr><td className="border px-2 py-1">Exercise 1-3 times/week</td><td className="border px-2 py-1">2,361</td></tr>
              <tr><td className="border px-2 py-1">Exercise 4-5 times/week</td><td className="border px-2 py-1">2,515</td></tr>
              <tr><td className="border px-2 py-1">Daily exercise or intense exercise 3-4 times/week</td><td className="border px-2 py-1">2,661</td></tr>
              <tr><td className="border px-2 py-1">Intense exercise 6-7 times/week</td><td className="border px-2 py-1">2,962</td></tr>
              <tr><td className="border px-2 py-1">Very intense exercise daily, or physical job</td><td className="border px-2 py-1">3,262</td></tr>
            </tbody>
          </table>
          <p className="mb-4 text-gray-700">
            <strong>Exercise:</strong> 15-30 minutes of elevated heart rate activity.<br/>
            <strong>Intense exercise:</strong> 45-120 minutes of elevated heart rate activity.<br/>
            <strong>Very intense exercise:</strong> 2+ hours of elevated heart rate activity.
          </p>
          <h2 className="text-2xl font-semibold mb-2">What is BMR?</h2>
          <p className="mb-4">The basal metabolic rate (BMR) is the amount of energy needed while resting in a temperate environment when the digestive system is inactive. It is the equivalent of figuring out how much gas an idle car consumes while parked. In such a state, energy will be used only to maintain vital organs, which include the heart, brain, kidneys, nervous system, intestines, liver, lungs, sex organs, muscles, and skin. For most people, upwards of ~70% of total energy (calories) burned each day is due to upkeep. Physical activity makes up ~20% of expenditure and ~10% is used for the digestion of food, also known as thermogenesis.</p>
          <p className="mb-4">The BMR is measured under very restrictive circumstances while awake. An accurate BMR measurement requires that a person's sympathetic nervous system is inactive, which means the person must be completely rested. Basal metabolism is usually the largest component of a person's total caloric needs. The daily caloric need is the BMR value multiplied by a factor with a value between 1.2 and 1.9, depending on activity level.</p>
          <h2 className="text-2xl font-semibold mb-2">BMR Equations</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700">
            <li><strong>Mifflin-St Jeor Equation:</strong><br/>For men: BMR = 10W + 6.25H - 5A + 5<br/>For women: BMR = 10W + 6.25H - 5A - 161</li>
            <li><strong>Revised Harris-Benedict Equation:</strong><br/>For men: BMR = 13.397W + 4.799H - 5.677A + 88.362<br/>For women: BMR = 9.247W + 3.098H - 4.330A + 447.593</li>
            <li><strong>Katch-McArdle Formula:</strong><br/>BMR = 370 + 21.6(1 - F)W<br/>where W is body weight in kg, H is body height in cm, A is age, F is body fat in percentage</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">BMR Variables</h2>
          <ul className="mb-4 list-disc list-inside text-gray-700">
            <li><strong>Muscle Mass</strong> – Aerobic exercises, such as running or cycling, have no effect on BMR. However, anaerobic exercises, such as weight-lifting, indirectly lead to a higher BMR because they build muscle mass, increasing resting energy consumption. The more muscle mass in the physical composition of an individual, the higher the BMR required to sustain their body at a certain level.</li>
            <li><strong>Age</strong> – The more elderly and limber an individual, the lower their BMR, or the lower the minimum caloric intake required to sustain the functioning of their organs at a certain level.</li>
            <li><strong>Genetics</strong> – Hereditary traits passed down from ancestors influence BMR.</li>
            <li><strong>Weather</strong> – Cold environments raise BMR because of the energy required to create a homeostatic body temperature. Likewise, too much external heat can raise BMR as the body expends energy to cool off internal organs. BMR increases approximately 7% for every increase of 1.36 degrees Fahrenheit in the body's internal temperature.</li>
            <li><strong>Diet</strong> – Small, routinely dispersed meals increase BMR. On the other hand, starvation can reduce BMR by as much as 30%. Similar to a phone that goes into power-saving mode during the last 5% of its battery, a human body will make sacrifices such as energy levels, moods, upkeep of bodily physique, and brain functions in order to more efficiently utilize what little caloric energy is being used to sustain it.</li>
            <li><strong>Pregnancy</strong> – Ensuring the livelihood of a separate fetus internally increases BMR. This is why pregnant women tend to eat more than usual. Also, menopause can increase or decrease BMR depending on hormonal changes.</li>
            <li><strong>Supplements</strong> – Certain supplements or drugs raise BMR, mostly to fuel weight loss. Caffeine is a common one.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">BMR Tests</h2>
          <p className="mb-4">Online BMR tests with rigid formulas are not the most accurate method of determining an individual's BMR. It is better to consult a certified specialist or measure BMR through a calorimetry device. These handheld devices are available in many health and fitness clubs, doctor offices, and weight-loss clinics.</p>
          <h2 className="text-2xl font-semibold mb-2">Resting Metabolic Rate</h2>
          <p className="mb-4">While the two are used interchangeably, there is a key difference in their definitions. Resting metabolic rate, or RMR for short, is the rate at which the body burns energy in a relaxed, but not fully inactive state. It is also sometimes defined as resting energy expenditure, or REE. BMR measurements must meet total physiological equilibrium while RMR conditions of measurement can be altered and defined by contextual limitations.</p>
          <h2 className="text-2xl font-semibold mb-2">Modern Wisdom</h2>
          <p className="mb-4">A 2005 meta-analysis study on BMR showed that when controlling all factors of metabolic rate, there is still a 26% unknown variance between people. Essentially, an average person eating an average diet will likely have expected BMR values, but there are factors that are still not understood that determines BMR precisely. Therefore, all BMR calculations, even using the most precise methods through specialists, will not be perfectly accurate in their measurements. Not all human bodily functions are well understood just yet, so calculating total daily energy expenditure (TDEE) derived from BMR estimates are just that, estimates. When working towards any sort of health or fitness goal, BMR can aid in laying down the foundations, but from there on, it has little else to offer. A calculated BMR and thus TDEE may result in unsatisfactory results because of their rough estimates, but maintaining a daily journal of exercise, food consumption, etc., can help track the factors that lead to any given results and help determine what works, as well as what needs to be improved upon. Tracking progress in said journal and making adjustments over time as needed is generally the best indication of progress towards reaching personal goals.</p>
        </section>
      </div>

      <footer className="w-full bg-gray-100 text-gray-600 text-center py-4 mt-10 border-t text-sm">
        <div className="space-x-4 mb-1">
          <a href="#" className="hover:underline">About Us</a>
          <span>|</span>
          <a href="#" className="hover:underline">Sitemap</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p>© 2008 - 2025</p>
      </footer>
    </main>
    </>
  );
}
