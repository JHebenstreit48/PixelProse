import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InlineAndValueClasses = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Performance/InlineAndValueClasses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Inline & Value Classes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InlineAndValueClasses;
