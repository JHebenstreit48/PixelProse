import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Metamethods = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/Metaprogramming/Metamethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metamethods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Metamethods;
