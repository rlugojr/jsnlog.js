﻿/**
* Copyright 2016 Mattijs Perdeck.
*
* This project is licensed under the MIT license.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Declarations of all interfaces and ambient objects, except for JL itself.
// Provides strong typing in both jsnlog.ts itself and in TypeScript programs that use 
// JSNLog. 

declare namespace JL {

	interface JSNLogOptions {
		enabled?: boolean;
		maxMessages?: number;
		defaultAjaxUrl?: string;
		clientIP?: string;
		requestId?: string;
		defaultBeforeSend?: (xhr: XMLHttpRequest) => void;
	}

	interface JSNLogFilterOptions {
		level?: number;
		ipRegex?: string;
		userAgentRegex?: string;
		disallow?: string;
	}

	interface JSNLogLoggerOptions extends JSNLogFilterOptions {
		appenders?: JSNLogAppender[];
		onceOnly?: string[];
	}

	// Base for all appender options types
	interface JSNLogAppenderOptions extends JSNLogFilterOptions {
		sendWithBufferLevel?: number;
		storeInBufferLevel?: number;
		bufferSize?: number;
		batchSize?: number;
	}

	interface JSNLogAjaxAppenderOptions extends JSNLogAppenderOptions {
		url?: string;
		beforeSend?: (xhr: XMLHttpRequest) => void;
	}

	interface JSNLogLogger {
		setOptions(options: JSNLogLoggerOptions): JSNLogLogger;

		trace(logObject: any): JSNLogLogger;
		debug(logObject: any): JSNLogLogger;
		info(logObject: any): JSNLogLogger;
		warn(logObject: any): JSNLogLogger;
		error(logObject: any): JSNLogLogger;
		fatal(logObject: any): JSNLogLogger;
		fatalException(logObject: any, e: any): JSNLogLogger;
		log(level: number, logObject: any, e?: any): JSNLogLogger;
	}

	interface JSNLogAppender {
		setOptions(options: JSNLogAppenderOptions): JSNLogAppender;
	}

	interface JSNLogAjaxAppender extends JSNLogAppender {
		setOptions(options: JSNLogAjaxAppenderOptions): JSNLogAjaxAppender;
	}

	interface JSNLogConsoleAppender extends JSNLogAppender {
	}
}

declare function __jsnlog_configure(jsnlog: any): void;

