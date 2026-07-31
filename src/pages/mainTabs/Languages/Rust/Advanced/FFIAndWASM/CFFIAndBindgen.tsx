import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
