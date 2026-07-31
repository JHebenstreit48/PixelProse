import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
