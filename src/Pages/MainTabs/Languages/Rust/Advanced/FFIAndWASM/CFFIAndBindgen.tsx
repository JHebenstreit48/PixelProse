import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CFFIAndBindgen = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/FFIAndWASM/CFFIAndBindgen';

  return (
    <>
      <PageLayout>
        <PageTitle title="C FFI & bindgen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CFFIAndBindgen;
