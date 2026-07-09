import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
