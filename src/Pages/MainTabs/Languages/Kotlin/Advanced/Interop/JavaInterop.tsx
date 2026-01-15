import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JavaInterop = () => {
  const markdownFilePath = 'Languages/Kotlin/Advanced/Interop/JavaInterop';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Java Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JavaInterop;
