import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TupleVsClass = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Math/TupleVsClass';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tuple vs Class" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TupleVsClass;
