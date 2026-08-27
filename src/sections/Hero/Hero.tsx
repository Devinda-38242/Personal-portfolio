import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GlowButton } from '../../components/ui/GlowButton'
import './Hero.css'

export function Hero() {
    const scrollToProjects = () => {
        document
            .getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">
            <div className="hero__orb hero__orb--one" />
            <div className="hero__orb hero__orb--two" />

            <div className="hero__content container">
                <motion.div
                    className="hero__eyebrow"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="hero__status">
                        <span className="hero__status-dot" />
                        Available for opportunities
                    </span>

                    <span className="hero__eyebrow-line" />

                    <span>Data Science · AI · Machine Learning</span>
                </motion.div>

                <motion.h1
                    className="hero__title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <span className="hero__greeting">Hello, I'm</span>
                    <span className="hero__name">Devinda.</span>
                    <span className="hero__tagline">
                        I turn data into intelligence.
                    </span>
                </motion.h1>

                <motion.p
                    className="hero__description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    I'm Devinda — a data science student building
                    intelligent systems, machine learning solutions,
                    and experiences where technology meets meaningful
                    problems.
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <GlowButton onClick={scrollToProjects}>
                        <span className="explore-dot" />
                        Explore my work
                    </GlowButton>

                    <GlowButton variant="secondary">
                        <span className="lyra-mark">✦</span>
                        Meet LYRA
                    </GlowButton>
                </motion.div>

                <motion.div
                    className="hero__meta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <span>Based in Sri Lanka</span>
                    <span className="hero__meta-divider" />
                    <span>Building with curiosity</span>
                </motion.div>
            </div>

            <motion.button
                className="hero__scroll"
                onClick={scrollToProjects}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                aria-label="Scroll to projects"
            >
                <span>Scroll to explore</span>
                <ArrowDown size={15} />
            </motion.button>
        </section>
    )
}

