import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ValueSemantics = () => {
  const markdownFilePath = 'Languages/Swift/Basics/MemoryBasics/ValueSemantics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Value Semantics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValueSemantics;
