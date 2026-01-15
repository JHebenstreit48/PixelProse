import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WASMBindings = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/WASMAndMemory/WASMBindings';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="WASM Bindings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WASMBindings;
