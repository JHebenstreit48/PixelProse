import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const WASMAndMemory = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/FFIAndWASM/WASMAndMemory';

  return (
    <>
      <PageLayout>
        <PageTitle title="WASM & Memory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WASMAndMemory;
