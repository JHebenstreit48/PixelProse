import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TupleVsClass = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Math/TupleVsClass';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tuple vs Class" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TupleVsClass;
