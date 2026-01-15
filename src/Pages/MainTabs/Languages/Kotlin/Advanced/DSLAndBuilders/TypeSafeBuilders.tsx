import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypeSafeBuilders = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/DSLAndBuilders/TypeSafeBuilders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Type-Safe Builders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeSafeBuilders;
