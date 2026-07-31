import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const WASMBindings = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/WASMAndMemory/WASMBindings';

  return (
    <>
      <PageLayout>
        <PageTitle title="WASM Bindings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WASMBindings;
