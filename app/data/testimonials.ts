export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Fusion IT Works transformed our digital presence completely. Our product have more than doubled reach, and we've significantly reduced our dependence on others.",
    author: "Sarah Mitchell",
    position: "General Manager",
    company: "Oceanview ",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    quote:
      "Their expertise in hospitality marketing is unmatched. They understand our industry and consistently deliver results that exceed our expectations.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "The Heritage Inn",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    quote:
      "Working with Fusion IT Works has been a game-changer. Their strategic approach to social media has helped us connect with our target audience in ways we never thought possible.",
    author: "Emily Rodriguez",
    position: "Owner",
    company: "Mountain Peak Lodge",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];
