export const profile = {
  name: 'Hồ Văn Dinh',
  introduction: 'Từ bài toán vận hành đến tư duy dữ liệu và giải pháp phần mềm. Một hành trình kết nối con người, quy trình và công nghệ.',
  about: 'Tôi có kinh nghiệm quản lý và vận hành thực tế, đồng thời đang xây dựng hướng đi với dữ liệu, AI và phần mềm. Portfolio này là nơi kết nối những góc nhìn đó trong một hồ sơ thống nhất.',
};

export const navigation = [
  { label: 'Giới thiệu', href: '/#about' },
  { label: 'Định hướng', href: '/#expertise' },
  { label: 'Dự án', href: '/projects/' },
];

export const expertise = [
  { number: '01', title: 'Management', subtitle: '& Operations', description: 'Bắt đầu từ con người và quy trình. Tìm hiểu cách tổ chức công việc để giải quyết những nhu cầu vận hành thực tế.', skills: ['Con người', 'Quy trình', 'Vận hành'], mark: 'ops' },
  { number: '02', title: 'Data', subtitle: 'Analytics & Engineering', description: 'Đặt câu hỏi từ bài toán thực tế. Khám phá cách dữ liệu được tổ chức, phân tích và chuyển thành thông tin hữu ích.', skills: ['Tư duy phân tích', 'Dữ liệu', 'Minh chứng'], mark: 'data' },
  { number: '03', title: 'AI & Software', subtitle: 'Engineering', description: 'Đi từ vấn đề đến giải pháp. Kết nối tư duy sản phẩm với AI và phần mềm, từng bước kiểm chứng khả năng ứng dụng.', skills: ['Tư duy sản phẩm', 'AI', 'Phần mềm'], mark: 'ai' },
];

export const experiences = [
  { title: 'Quản lý & vận hành', category: 'MANAGEMENT / OPERATIONS', description: 'Vị trí dành cho mô tả trách nhiệm, cách phối hợp công việc và bài học từ thực tế vận hành.', note: 'Nội dung minh họa · Tổ chức, chức danh và thời gian chờ xác nhận' },
  { title: 'Hỗ trợ hoạt động học tập', category: 'EDUCATION / COORDINATION', description: 'Vị trí dành cho mô tả hoạt động hỗ trợ lớp học, nhiệm vụ cụ thể và kinh nghiệm làm việc cùng người học.', note: 'Nội dung minh họa · Vai trò và phạm vi công việc chờ xác nhận' },
];

export type CareerTrack = 'management' | 'data' | 'ai-software';
export type ProjectStatus = 'planned' | 'in-progress' | 'completed' | 'archived';
export interface CaseSection {
  id: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
}
export interface Project {
  number: string;
  slug: string;
  title: string;
  description: string;
  careerTracks: CareerTrack[];
  status: ProjectStatus;
  visibility: 'public' | 'draft' | 'private';
  demo: boolean;
  featured: boolean;
  visual: 'data' | 'operations';
  tags: string[];
  role: string;
  sections: CaseSection[];
}
export const trackLabels: Record<CareerTrack, string> = {
  management: 'Management / Operations', data: 'Data', 'ai-software': 'AI / Software',
};
export const statusLabels: Record<ProjectStatus, string> = {
  planned: 'Đề xuất · chưa triển khai', 'in-progress': 'Đang thực hiện', completed: 'Hoàn thành', archived: 'Lưu trữ',
};
export const demoDisclaimer = 'Tình huống giả định để minh họa giao diện. Không phải dự án, kinh nghiệm hay thành tích thực tế của Hồ Văn Dinh.';
const pendingEvidence = 'Đang chuẩn bị nội dung đã kiểm chứng';

export const projects: Project[] = [
  {
    number: '01', slug: 'operations-case-demo', title: 'Từ ý tưởng đến giải pháp',
    description: 'Tình huống giả định: tổ chức một quy trình bàn giao công việc rõ ràng giữa các ca vận hành.',
    careerTracks: ['management'], status: 'planned', visibility: 'public', demo: true, featured: true,
    visual: 'operations', tags: ['Quy trình', 'Bàn giao', 'Phối hợp'],
    role: 'Vai trò giả định: người đề xuất quy trình',
    sections: [
      { id: 'context', title: 'Bối cảnh & bài toán', paragraphs: ['Trong tình huống giả định này, thông tin công việc đang xử lý được ghi ở nhiều nơi. Ca tiếp theo cần biết việc nào còn mở, ai phụ trách và khi nào cần theo dõi.', 'Câu hỏi thiết kế: làm thế nào để nội dung bàn giao dễ đọc và có trách nhiệm rõ ràng, mà không thêm thao tác không cần thiết?'] },
      { id: 'scope', title: 'Vai trò & phạm vi', paragraphs: ['Vai trò trong ví dụ là người đề xuất cách tổ chức bàn giao, không phải chức danh hoặc kinh nghiệm đã xác nhận của chủ sở hữu.', 'Phạm vi dự kiến chỉ gồm cấu trúc thông tin bàn giao và cách kiểm tra việc tiếp nhận. Không đại diện cho quy trình của bất kỳ tổ chức nào.'] },
      { id: 'approach', title: 'Cách tiếp cận & quyết định', paragraphs: ['Các bước dưới đây là phương án dự kiến trong tình huống minh họa, chưa được áp dụng hoặc đánh giá.'], steps: ['Làm rõ thông tin mà người nhận ca cần để tiếp tục công việc.', 'Đề xuất ghi mỗi việc với trạng thái, người phụ trách và bước tiếp theo.', 'Dự kiến thử đọc lại bản bàn giao để phát hiện chỗ thiếu hoặc khó hiểu.'] },
      { id: 'artifacts', title: 'Triển khai & tài liệu', paragraphs: [pendingEvidence, 'Chưa có biểu mẫu thực tế, tài liệu nội bộ hoặc hình ảnh triển khai được phép công bố. Một mẫu bàn giao chỉ là đầu ra dự kiến.'] },
      { id: 'evidence', title: 'Kết quả & minh chứng', paragraphs: [pendingEvidence, 'Chưa triển khai nên không có kết quả đo lường. Không suy diễn tác động đến thời gian, chất lượng vận hành hoặc hiệu suất.'] },
      { id: 'next-steps', title: 'Trạng thái & bước tiếp theo', paragraphs: ['Tình huống đang ở mức đề xuất minh họa. Bước tiếp theo dự kiến là xác nhận nhu cầu và cách đánh giá trước khi thử nghiệm.', 'Chỉ thay nội dung này bằng case study thật sau khi chủ sở hữu xác nhận bằng chứng và quyền công khai.'] },
    ],
  },
  {
    number: '02', slug: 'data-case-demo', title: 'Từ dữ liệu đến góc nhìn',
    description: 'Tình huống giả định: khám phá cách phân nhóm phản hồi bằng dữ liệu và một phương án hỗ trợ từ AI.',
    careerTracks: ['data', 'ai-software'], status: 'planned', visibility: 'public', demo: true, featured: true,
    visual: 'data', tags: ['Câu hỏi dữ liệu', 'Phân nhóm', 'Đánh giá'],
    role: 'Vai trò giả định: người đề xuất phương án phân tích',
    sections: [
      { id: 'context', title: 'Bối cảnh & bài toán', paragraphs: ['Tình huống giả định đặt ra nhu cầu đọc phản hồi dạng văn bản và tìm những chủ đề thường gặp. Chưa có tập dữ liệu thực tế nào được sử dụng trong ví dụ.', 'Câu hỏi nghiên cứu: một phương án phân nhóm có giúp người đọc hiểu nội dung tốt hơn so với cách đọc và gắn nhãn thủ công?'] },
      { id: 'scope', title: 'Vai trò & phạm vi', paragraphs: ['Vai trò minh họa là đề xuất câu hỏi phân tích và tiêu chí đánh giá. Đây không phải mô tả một dự án Data/AI đã thực hiện.', 'Phạm vi dự kiến là so sánh cách gắn nhãn thủ công với phương án hỗ trợ từ AI. Không bao gồm huấn luyện mô hình hay triển khai hệ thống.'] },
      { id: 'approach', title: 'Cách tiếp cận & quyết định', paragraphs: ['Ưu tiên xác định điều cần kiểm chứng trước khi chọn công cụ hoặc mô hình.'], steps: ['Xác định nguồn dữ liệu được phép dùng và cách loại bỏ thông tin nhạy cảm.', 'Đề xuất quy tắc gắn nhãn thủ công làm cơ sở so sánh.', 'Dự kiến đánh giá nhóm phản hồi và phân tích trường hợp AI phân loại chưa phù hợp.'] },
      { id: 'artifacts', title: 'Triển khai & tài liệu', paragraphs: [pendingEvidence, 'Chưa có dataset, notebook, repository hoặc mô hình đã triển khai. Các hình khối trên card chỉ minh họa giao diện, không biểu diễn dữ liệu hay kết quả.'] },
      { id: 'evidence', title: 'Kết quả & minh chứng', paragraphs: [pendingEvidence, 'Chưa thực hiện đánh giá. Không có benchmark, độ chính xác hoặc kết luận về chất lượng mô hình để công bố.'] },
      { id: 'next-steps', title: 'Trạng thái & bước tiếp theo', paragraphs: ['Tình huống đang ở mức đề xuất minh họa. Bước tiếp theo dự kiến là xác nhận dữ liệu, tiêu chí đánh giá và giới hạn sử dụng.', 'Case study thật cần bằng chứng có thể kiểm tra và phê duyệt nội dung trước khi xuất bản.'] },
    ],
  },
];

// Public here means eligible for the local prototype, not authorization to deploy.
export const visibleProjects = projects.filter(project => project.visibility === 'public');
export const featuredProjects = visibleProjects.filter(project => project.featured);
export const projectHref = (project: Pick<Project, 'slug'>) => `/projects/${project.slug}/`;
