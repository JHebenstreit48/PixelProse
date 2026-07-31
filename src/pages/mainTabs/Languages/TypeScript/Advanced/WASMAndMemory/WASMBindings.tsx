import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
