import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OptionalAndNull = () => {
  const markdownFilePath = 'Languages/Java/Basics/Collections/OptionalAndNull';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optional & Null" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OptionalAndNull;
