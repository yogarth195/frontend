import { motion } from 'framer-motion'

export const WelcomeHeading = ()=> {
    return (
        <motion.div
            initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true, amount: 0.8}}  // <-- changed once: true here
            transition={{duration: 0.8, ease:"easeOut"}}
            className='flex flex-col text-2xl dark:text-white p-2 items-center'
        >
            <div>Welcome to Suraj Studios</div>
            <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 px-4">
                <p className="text-lg leading-relaxed">
                    Capturing timeless moments, transforming them into cherished memories.
                    Our team believes in storytelling through photography, bringing out the 
                    essence of every frame.
                </p>
            </div>
        </motion.div>
    )
}
