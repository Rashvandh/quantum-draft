import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'bounce-in' | 'zoom-in';

type AnimationWrapperProps = {
  children: ReactNode;
  delay?: number;
  animation?: AnimationType;
  className?: string;
};

const animations: Record<AnimationType, Variants> = {
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  'slide-down': {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  'slide-left': {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  },
  'slide-right': {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  },
  'bounce-in': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  }
};

const AnimationWrapper = ({
  children,
  delay = 0,
  animation = 'fade-in',
  className = ''
}: AnimationWrapperProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
