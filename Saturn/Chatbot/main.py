import streamlit as st
import random
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

nltk.download('averaged_perceptron_tagger')
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('wordnet')

# Sample responses

responses = {
    "earthquake": "Earthquakes are natural phenomena caused by the sudden release of energy in the Earth's crust, resulting in seismic waves.",
    "asteroid impact": "An asteroid impact occurs when a space rock collides with Earth. Fortunately, most asteroids are small and burn up in the atmosphere.",
    "solar eclipse": "A solar eclipse happens when the moon passes between the Earth and the Sun, blocking all or part of the Sun's light.",
    "black hole": "A black hole is a region in space where gravity is so strong that nothing, not even light, can escape its pull.",
    "supernova": "A supernova is a massive explosion that occurs when a star reaches the end of its life cycle, producing a burst of radiation brighter than an entire galaxy.",
    "nebula": "A nebula is a vast cloud of gas and dust in space, where new stars are born and existing stars release their outer layers.",
    "galaxy": "A galaxy is a massive system of stars, stellar remnants, interstellar gas, dust, dark matter, and other cosmic phenomena bound together by gravity.",
    "dark matter": "Dark matter is a mysterious, invisible substance that makes up a significant portion of the total mass in the universe, yet it doesn't emit, absorb, or reflect light.",
    "wormhole": "A wormhole is a hypothetical tunnel-like structure that connects two separate points in spacetime, potentially allowing for faster-than-light travel.",
    "quasar": "A quasar is an extremely bright and energetic nucleus of a galaxy, powered by a supermassive black hole at its center.",
    "cosmic microwave background": "The cosmic microwave background (CMB) is the residual radiation from the Big Bang, providing a snapshot of the early universe's temperature and density fluctuations.",
    "gravity": "Gravity is the force by which a planet or other body draws objects toward its center. It gives weight to physical objects and governs the motions of celestial bodies.",
    "space-time": "Space-time is the four-dimensional continuum that combines three-dimensional space and one-dimensional time into a single entity, as described by Einstein's theory of general relativity.",
    "dark energy": "Dark energy is a mysterious force causing the accelerated expansion of the universe, counteracting the gravitational pull of matter.",
    "extraterrestrial life": "Extraterrestrial life refers to life that may exist beyond Earth. The search for extraterrestrial intelligence (SETI) explores the possibility of communicating with alien civilizations.",
    "cosmic inflation": "Cosmic inflation is a theory that suggests the universe underwent an exponential expansion during the first few moments after the Big Bang, solving some outstanding cosmological problems.",
    "hubble space telescope": "The Hubble Space Telescope is a space-based observatory that has provided stunning images and valuable data, contributing to numerous discoveries in astrophysics.",
    "space exploration": "Space exploration involves the use of astronomy and space technologies to explore outer space. Missions aim to study celestial objects, gather data, and advance scientific knowledge.",
    "exoplanet": "An exoplanet is a planet located outside our solar system, orbiting a star other than the Sun.",
    "space debris": "Space debris, also known as space junk, refers to defunct human-made objects in orbit around Earth, including old satellites and fragments from rocket launches.",
    "rocket launch": "A rocket launch is the process of sending a spacecraft or satellite into space using a rocket.",
    "space station": "A space station is a large spacecraft where astronauts live and work for extended periods. The International Space Station (ISS) is a notable example.",
    "telescope": "A telescope is an optical instrument that gathers and magnifies light to observe distant objects in the sky, aiding astronomers in their observations.",
    "comet": "A comet is a celestial object composed of ice, dust, and volatile compounds that orbits the Sun. When close to the Sun, it develops a bright, glowing coma and a tail.",
    "astronaut": "An astronaut is a trained space traveler who participates in space missions, conducting experiments and performing tasks in microgravity.",
    "orbit": "An orbit is the curved path of an object around a celestial body, typically a planet, moon, or star, under the influence of gravity.",
    "space shuttle": "A space shuttle is a reusable spacecraft that transports astronauts and cargo to and from space. The NASA Space Shuttle program operated from 1981 to 2011.",
    "telescope": "A telescope is an optical instrument that gathers and magnifies light to observe distant objects in the sky, aiding astronomers in their observations.",
    "space agency": "A space agency is a government or non-governmental organization responsible for the planning and execution of space missions, research, and exploration.",
    "cosmonaut": "A cosmonaut is a Russian or former Soviet astronaut. The term is often used to refer to space travelers trained by the Russian space program.",
    "constellation": "A constellation is a group of stars that, when viewed from Earth, form a recognizable pattern. Constellations have been used for centuries as a way to navigate the night sky.",
    "interstellar travel": "Interstellar travel involves traveling between stars within a galaxy. While currently beyond our technological capabilities, it remains a popular topic in science fiction.",
    "space tourism": "Space tourism is an emerging industry that aims to provide private individuals with the opportunity to travel to space for recreational purposes.",
    "space race": "The space race was a Cold War competition between the United States and the Soviet Union to achieve significant milestones in space exploration.",
    "moon landing": "The moon landing refers to the historic event when humans first set foot on the Moon. The Apollo 11 mission, with astronauts Neil Armstrong and Buzz Aldrin, achieved this milestone in 1969.",
    "mars rover": "A Mars rover is a robotic vehicle designed to explore the surface of Mars, conducting scientific experiments and sending data back to Earth.",
    "solar system": "The solar system consists of the Sun and the celestial objects bound to it by gravity, including planets, moons, asteroids, comets, and other debris.",
    "space suit": "A space suit is a garment designed to protect astronauts from the harsh conditions of space, including vacuum, radiation, and temperature extremes.",
    "ISS": "The International Space Station (ISS) is a habitable artificial satellite that serves as a microgravity research laboratory, where scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields.",
}


stop_words = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()

def preprocess_text(text):
    text = text.lower()
    word_tokens = word_tokenize(text)
    filtered_text = [word for word in word_tokens if word not in stop_words]
    lemmatized_text = [lemmatizer.lemmatize(word) for word in filtered_text]
    return lemmatized_text

def get_disease(symptoms):
    symptoms = preprocess_text(symptoms)
    for symptom in symptoms:
        if symptom in responses:
            return responses[symptom]
    return "I'm not sure about the disease related to these symptoms."

def chatbot_ui():
    st.title("Cosmology Chatbot")

    st.write("Hello! I can provide general advice based on cosmology.")
    st.write("Type 'exit' to quit.")

    user_input = st.text_input("You:")
    if user_input.lower() == "exit":
        st.write("Goodbye!")
    else:
        response = get_disease(user_input)
        st.write("Chatbot:", response)

if "_name_" == "_main_":
    chatbot_ui()