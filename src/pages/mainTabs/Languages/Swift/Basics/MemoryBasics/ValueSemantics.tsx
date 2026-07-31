import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ValueSemantics = () => {
  const markdownFilePath = 'Languages/Swift/Basics/MemoryBasics/ValueSemantics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Value Semantics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValueSemantics;
