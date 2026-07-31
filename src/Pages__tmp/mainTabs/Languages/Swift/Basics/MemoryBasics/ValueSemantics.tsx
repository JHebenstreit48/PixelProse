import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
