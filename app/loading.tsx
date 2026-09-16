import Image from 'next/image'

export default function Loading() {
  return (
    <div className="min-h-svh bg-[#F8F8F6] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/TTA_2@4x.webp"
          alt="The Torts Attorney"
          width={160}
          height={80}
          priority
          className="h-16 sm:h-20 w-auto object-contain animate-pulse"
        />
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#C6A24A] animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#C6A24A] animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-[#C6A24A] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
