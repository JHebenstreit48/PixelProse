import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
