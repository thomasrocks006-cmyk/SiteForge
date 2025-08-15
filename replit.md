# WorkTalk PWA

## Overview

WorkTalk is a mobile-first Progressive Web App (PWA) that provides a Teams-style communication interface for workplace collaboration. Built with React, TypeScript, and Tailwind CSS, it features a modern chat application with direct messaging, team channels, activity feeds, calendar integration, and call management. The application is designed specifically for mobile devices with a bottom tab navigation system and responsive design patterns.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript for type safety and modern development patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for client-side navigation with a tab-based mobile interface
- **Styling**: Tailwind CSS 4.x with custom design tokens for consistent theming
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Icons**: Lucide React for consistent iconography

### PWA Implementation
- **Service Worker**: Basic caching strategy for offline functionality
- **Manifest**: Web app manifest for installability on mobile devices
- **Responsive Design**: Mobile-first approach optimized for viewport widths 375-414px

### Component Architecture
- **Layout Components**: TopBar for headers, TabBar for bottom navigation, consistent across all pages
- **Chat Components**: MessageBubble for message display, ChatList for contact/conversation listing
- **Page Components**: Separate pages for Chat, Teams, Activity, Calendar, and Calls functionality
- **Hooks**: Custom useSimulatedTraffic hook for demonstrating real-time message simulation

### Data Management
- **Static Data**: Seed data stored in TypeScript files for contacts, teams, channels, and messages
- **State Management**: React useState for component-level state, no global state management
- **Type System**: Comprehensive TypeScript interfaces for Contact, Team, Channel, Message, and Role types

### UI/UX Design Patterns
- **Bottom Tab Navigation**: Five-tab layout mimicking Microsoft Teams mobile interface
- **Message Threading**: Chat bubbles with author attribution and timestamps
- **Unread Indicators**: Badge system for unread message counts in channels
- **Status Indicators**: User availability states (available, busy, do not disturb, offline)
- **Role-Based Styling**: Visual differentiation based on user roles (PM, Analyst, Sales, etc.)

### Routing Strategy
- **Hash-Based Routing**: Uses React Router for SPA navigation
- **Nested Routes**: Support for team/channel deep linking with URL parameters
- **Default Redirects**: Root path redirects to chat index for consistent user experience

## External Dependencies

### Core Framework Dependencies
- **React 19**: Latest React version with concurrent features
- **React DOM 19**: DOM bindings for React
- **React Router DOM 7.8**: Client-side routing and navigation
- **TypeScript 5.9**: Static type checking and enhanced developer experience

### Styling and UI
- **Tailwind CSS 4.1**: Utility-first CSS framework with custom configuration
- **PostCSS 8.5**: CSS processing pipeline
- **Autoprefixer 10.4**: Automatic vendor prefixing for CSS
- **Framer Motion 12.23**: Animation library for React components
- **Lucide React 0.539**: Icon library with consistent design language

### Build and Development Tools
- **Vite 7.1**: Fast build tool and development server
- **@vitejs/plugin-react 5.0**: React plugin for Vite
- **Workbox Build 7.3**: PWA tooling for service worker generation

### PWA Infrastructure
- **Service Worker**: Manual implementation for basic caching
- **Web App Manifest**: Configuration for mobile app installation
- **Icon Assets**: 192px and 512px icons for various device sizes

Note: The application currently uses static seed data for demonstration purposes. Future iterations may integrate with real-time messaging APIs, authentication services, or backend databases for production deployment.