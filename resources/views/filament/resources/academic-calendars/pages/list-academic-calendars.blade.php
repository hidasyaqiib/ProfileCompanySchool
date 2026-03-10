<x-filament-panels::page>

    @assets
        <link href='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.css' rel='stylesheet' />
        <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.15/locales/id.global.min.js'></script>
    @endassets

    <div wire:ignore x-data="academicCalendar(@js($this->getCalendarEvents()))" x-init="initCalendar()">
        <div class="fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10">
            <div class="fi-section-content p-4 md:p-6">
                <div x-ref="calendarEl"></div>
            </div>
        </div>
    </div>

    @push('scripts')
        <script>
            document.addEventListener('alpine:init', function() {
                registerAcademicCalendarAlpineComponent();
            });

            // Fallback: if alpine:init already fired before this script runs
            if (typeof Alpine !== 'undefined' && typeof Alpine.data !== 'undefined') {
                registerAcademicCalendarAlpineComponent();
            }

            function registerAcademicCalendarAlpineComponent() {
                if (typeof Alpine === 'undefined' || typeof Alpine.data === 'undefined') return;
                if (window.__academicCalendarRegistered) return;
                window.__academicCalendarRegistered = true;

                Alpine.data('academicCalendar', (initialEvents) => ({
                    calendar: null,

                    initCalendar() {
                        if (typeof FullCalendar === 'undefined') {
                            setTimeout(() => this.initCalendar(), 100);
                            return;
                        }

                        const wire = this.$wire;

                        this.calendar = new FullCalendar.Calendar(this.$refs.calendarEl, {
                            initialView: 'dayGridMonth',
                            locale: 'id',

                            headerToolbar: {
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,listWeek',
                            },

                            buttonText: {
                                today: 'Hari Ini',
                                month: 'Bulan',
                                week: 'Minggu',
                                list: 'Daftar',
                            },

                            events: initialEvents,

                            // Editing
                            editable: true,
                            droppable: true,

                            // Date selection (click day or drag range → create modal)
                            selectable: true,
                            selectMirror: true,
                            unselectAuto: true,

                            dayMaxEvents: true,
                            navLinks: true,
                            nowIndicator: true,
                            height: 'auto',
                            themeSystem: 'standard',

                            // Click on existing event → edit modal
                            eventClick(info) {
                                info.jsEvent.preventDefault();
                                wire.mountAction('editEvent', {
                                    id: parseInt(info.event.id)
                                });
                            },

                            // Click on a day or drag across days → create modal pre-filled
                            select(info) {
                                wire.mountAction('createEvent', {
                                    start: info.startStr,
                                    end: info.endStr, // exclusive end, handled server-side
                                });
                            },

                            // Drag-drop reschedule
                            eventDrop(info) {
                                wire.eventDropped(
                                    parseInt(info.event.id),
                                    info.event.startStr,
                                    info.event.end ? info.event.endStr : null
                                );
                            },

                            // Resize event to change end date
                            eventResize(info) {
                                wire.eventDropped(
                                    parseInt(info.event.id),
                                    info.event.startStr,
                                    info.event.endStr
                                );
                            },
                        });

                        this.calendar.render();
                        // Fix initial crop: wait for browser to finish layout before measuring container width
                        requestAnimationFrame(() => requestAnimationFrame(() => this.calendar.updateSize()));

                        window.addEventListener('calendar-refresh', async () => {
                            const freshEvents = await wire.getCalendarEvents();
                            this.calendar.removeAllEvents();
                            this.calendar.addEventSource(freshEvents);
                        });
                    },
                }));
            }
        </script>

        <style>
            /* =========================================
                           FullCalendar — Button style (image ref)
                           Primary: #2DC86F
                        ========================================= */

            .fc .fc-button {
                border-radius: 0.5rem;
                font-size: 0.8125rem;
                font-weight: 500;
                padding: 0.375rem 0.875rem;
                line-height: 1.5;
                transition: background-color .15s, border-color .15s, color .15s;
                box-shadow: none !important;
                outline: none !important;
                background-color: transparent;
                border: 1.5px solid #2DC86F;
                color: #2DC86F;
            }

            .fc .fc-button:hover:not(:disabled) {
                background-color: #2DC86F;
                border-color: #2DC86F;
                color: #fff;
            }

            .fc .fc-button-primary:not(:disabled).fc-button-active,
            .fc .fc-button-primary:not(:disabled):active {
                background-color: #2DC86F !important;
                border-color: #2DC86F !important;
                color: #fff !important;
            }

            .fc .fc-button:focus,
            .fc .fc-button:focus-visible {
                box-shadow: 0 0 0 3px rgba(45, 200, 111, 0.25) !important;
            }

            /* Today — filled */
            .fc .fc-today-button {
                background-color: #2DC86F;
                border-color: #2DC86F;
                color: #fff;
            }

            .fc .fc-today-button:hover:not(:disabled) {
                background-color: #25a65d;
                border-color: #25a65d;
                color: #fff;
            }

            .fc .fc-today-button:disabled {
                background-color: #2DC86F;
                border-color: #2DC86F;
                color: #fff;
                opacity: 0.65;
            }

            /* Prev / Next — smaller */
            .fc .fc-prev-button,
            .fc .fc-next-button {
                padding: 0.375rem 0.6rem;
            }

            /* Button group (month/week/list) — rounded ends only */
            .fc .fc-button-group>.fc-button {
                border-radius: 0;
            }

            .fc .fc-button-group>.fc-button:first-child {
                border-radius: 0.5rem 0 0 0.5rem;
            }

            .fc .fc-button-group>.fc-button:last-child {
                border-radius: 0 0.5rem 0.5rem 0;
            }

            .fc .fc-button-group>.fc-button:only-child {
                border-radius: 0.5rem;
            }

            /* Toolbar title */
            .fc .fc-toolbar-title {
                font-size: 1rem;
                font-weight: 600;
                letter-spacing: 0.01em;
            }

            /* Today cell highlight */
            .fc .fc-day-today {
                background-color: rgba(45, 200, 111, 0.08) !important;
            }

            .fc .fc-day-today .fc-daygrid-day-number {
                background-color: #2DC86F;
                color: #fff;
                border-radius: 50%;
                width: 1.6rem;
                height: 1.6rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            /* Selection highlight */
            .fc .fc-highlight {
                background-color: rgba(45, 200, 111, 0.15);
            }

            /* =========================================
                           Dark mode
                        ========================================= */
            .dark .fc {
                --fc-border-color: rgb(55 65 81);
                --fc-page-bg-color: rgb(17 24 39);
                --fc-neutral-bg-color: rgb(31 41 55);
                --fc-list-event-hover-bg-color: rgb(55 65 81);
                color: rgb(209 213 219);
            }

            .dark .fc .fc-col-header-cell-cushion,
            .dark .fc .fc-daygrid-day-number,
            .dark .fc .fc-list-day-text,
            .dark .fc .fc-list-day-side-text {
                color: rgb(209 213 219);
            }
        </style>
    @endpush

</x-filament-panels::page>
