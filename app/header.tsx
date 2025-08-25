import Image from "next/image";
import profilePic from "@/assets/profile.jpg";
import Link from "next/link";
import { TextEffect } from "@/components/ui/text-effect";

export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Image
                    src={profilePic}
                    alt="Profile picture"
                    className="w-32 h-32 rounded-4xl"
                />
                <div>
                    <Link href="/" className="font-ltsold text-4xl text-black dark:text-white">
                        Hla Yin Htwe
                    </Link>
                    <TextEffect
                        as="p"
                        preset="fade"
                        per="char"
                        className="text-zinc-600 dark:text-zinc-500"
                        delay={0.5}
                    >
                        Design Engineer
                    </TextEffect>
                </div>
            </div>
        </header>
    );
}
