import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CFFIAndBindgen = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/FFIAndWASM/CFFIAndBindgen';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="C FFI & bindgen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CFFIAndBindgen;
